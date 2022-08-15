import React, {useEffect, useState} from "react";

export const GoogleLogin = () => {
	const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		if (user?._id || gsiScriptLoaded) return

		const initializeGsi = () => {
			// Typescript will complain about window.google
			// Add types to your `react-app-env.d.ts` or //@ts-ignore it.
			if (!window.google || gsiScriptLoaded) return

			setGsiScriptLoaded(true);
			window.google.accounts.id.initialize({
				client_id: "907100418669-pa4c1oeginl8k39430qsv4gjgpdp3jmi.apps.googleusercontent.com",
				callback: handleGoogleSignIn,
			});

			window.google.accounts.id.renderButton(
				document.getElementById("googleLogin"),
				{ theme: "outline", size: "large", shape: "rectangular",
					text: "signin_with",
					locale: "es",
					logo_alignment: "left",
					width: "277" }  // customization attributes
			);
		}

		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.onload = initializeGsi;
		script.async = true;
		script.id = "google-client-script";
		document.querySelector("body")?.appendChild(script)

		return () => {
			// Cleanup function that runs when component unmounts
			window.google?.accounts.id.cancel();
			document.getElementById("google-client-script")?.remove()
		}
	}, []);

	const handleGoogleSignIn = (res) => {
		if (!res.clientId || !res.credential) return

		console.log("respones", res);
		// Implement your login mutations and logic here.
		// Set cookies, call your backend, etc.
	}

	return (
		<div id="googleLogin" />
	)
}
