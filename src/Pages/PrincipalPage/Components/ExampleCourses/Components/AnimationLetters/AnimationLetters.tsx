import styles from './AnimationLetters.module.css';
import { FC } from 'react';
interface Props {

}
const AnimationLetters: FC<Props> = function () {
    var TxtType: any = function (this: any, el: any, toRotate: any, period: any) {
        var me: any = this;
        me.toRotate = toRotate;
        me.el = el;
        me.loopNum = 0;
        me.period = parseInt(period, 10) || 2000;
        me.txt = '';
        me.tick();
        me.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="'+ styles.wrap + '">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(this, elements[i], JSON.parse(toRotate), period);
            }
        }
    };

    return (
        <div>
            <p className={styles.animation} >
                <a className="typewrite" data-period="2000" data-type='[ "Crianza respetuosa", "Alimentación complementaria y BLW", "Lactancia materna", "Estimulación temprana", "Metodo Montessori" ]'></a>
                <span className={styles.wrap}></span>
            </p>
        </div>
    )
}

export default AnimationLetters;