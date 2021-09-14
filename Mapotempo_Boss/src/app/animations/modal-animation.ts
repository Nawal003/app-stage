import { Animation, createAnimation } from '@ionic/angular';

export const modalAnimation = (
    baseEl: HTMLElement,
    presentingEl?: HTMLElement,
  ): Animation => {


  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', 0.01, 0.5)
    .beforeStyles({
      'pointer-events': 'none'
    })
    .afterClearStyles(['pointer-events']);

  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')!)
    .beforeStyles({ 'opacity': 1 })
    .keyframes([
        { offset: 0, transform: 'translateY(100vh)' },
        { offset: 0.4, transform: 'translateY(30vh)'},
        { offset: 0.7, transform: 'translateY(40vh)'},
        { offset: 1, transform: 'translateY(40vh)'},
      ]);

      
      const baseAnimation = createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(600)
      .addAnimation([wrapperAnimation, backdropAnimation]);
      
      return baseAnimation;
    };
    
    export const leaveAnimation = (baseEl: HTMLElement) => {
      
      return modalAnimation(baseEl).direction('reverse').duration(400);
    } 
