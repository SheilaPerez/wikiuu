import { useEffect, useState } from "react";

type GoogleUser = {
    _id: string;
}

export const GoogleLogin = () => {
	const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)
	const [user, setUser] = useState<GoogleUser | undefined>(undefined);
	const anyWindow = window as any;

	useEffect(() => {
		if (user?._id || gsiScriptLoaded) return

		const initializeGsi = () => {
			// Typescript will complain about window.google
			// Add types to your `react-app-env.d.ts` or //@ts-ignore it.
			if (!anyWindow.google || gsiScriptLoaded) return

			setGsiScriptLoaded(true);
			anyWindow.google.accounts.id.initialize({
				client_id: "907100418669-pa4c1oeginl8k39430qsv4gjgpdp3jmi.apps.googleusercontent.com",
				callback: handleGoogleSignIn,
			});

			anyWindow.google.accounts.id.renderButton(
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
			anyWindow.google?.accounts.id.cancel();
			document.getElementById("google-client-script")?.remove()
		}
	}, []);

	const handleGoogleSignIn = (res: any) => {
		if (!res.clientId || !res.credential) return

		console.log("respones", res);
		// Implement your login mutations and logic here.
		// Set cookies, call your backend, etc.
	}

	return (
		<div id="googleLogin" />
	)
}