class Anima{constructor({element:t}={}){this.element=t,this.isAnimationRunning=!1,this.isFinished=(t=>t)}animate(t,{fromValue:n,toValue:e,duration:i,delay:r=0,timingCurve:o},s=null){if(this.isAnimationRunning)return;let u=null;const a=l=>{let c;this.isAnimationRunning=!0,null===u&&(u=l);const m=(c=l-u)/i,p=e>n?n:e,f=n<e?e-n:n-e;let y=o(m)*f+p;if(e<n&&(y-=n,y=Math.abs(y-p)),this.animateProperty({delay:r,property:t,animationPosition:y,element:this.element}),!(m>=0&&m<=1)){if(this.isAnimationRunning=!1,this.animateProperty({property:t,animationPosition:this.isFinished(e),element:this.element}),u=null,null===s)return;return s()}requestAnimationFrame(a)};requestAnimationFrame(a)}animateProperty({delay:t,property:n,animationPosition:e,element:i}){window.setTimeout(()=>{this.isPropertyExceptionExist(n)?this.setPropertyException(i,n,e):this.element.style[n]=`${e}px`},t)}setPropertyException(t,n,e){return{scrollY:()=>{window.scrollTo(0,e)},scrollX:()=>{window.scrollTo(e,0)},scroll:()=>{window.scrollTo(e,e)},rotate:()=>{t.style.transform=`rotate(${e}deg)`},scale:()=>{t.style.transform=`scale(${e})`}}[n]()}isPropertyExceptionExist(t){return-1!==Animator.propertyExceptions.indexOf(t)}static get propertyExceptions(){return["scrollY","scrollX","scroll","rotate","scale"]}static get timingCurves(){return{linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}}