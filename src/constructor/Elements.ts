import IElement from './types';

type Idiv = {
  id?: string;
  class?: string;
};

class Elements {
  static create(elementObject: IElement) {
    const { tag, id, classList } = elementObject;

    const element = document.createElement(tag);
    element.id = id;
    classList.forEach((className) => element.classList.add(className));

    return element;
  }
}

export default Elements;

/*
  API

  const myElement = elements.create('div#id.myClass.mySecondClass');

  const myElement = elements.create('div#id.myClass.mySecondClass', {
    children: [
      elements.create('div'),
    ],
  });

  elements.img({
    src: '',
    alt: ''
  })

  elements.a({
    href: ''
  })

  elements.button({
    onClick: () => {},
    type: 'submit',
    disabled: true,
  })

  elements.div({ class: '' }, [
    elements.img({ src: '', class: '' }),
    elements.button({ onClick: () => {}, class: '' }),
  ])

  import { div, img, button } from 'elements';

  div({ class: '' }, [
    img({ src: '', class: '' }),
    button({ onClick: () => {}, class: '' }),
  ])

  const myComponent = (myParameter: string) => {
    ...

    return div({ class: '' });
  }

  div({ class: '' }, [
    img({ src: '', class: '' }),
    myComponent(myParameter),
  ])

  const myComponent = (parameters, children) {
    return div({}, [
      img({ src: '', class: '' }),
      button({ onClick: () => {}, class: '' }),
      ...children,
    ]);
  }

  div({ class: '' }, [
    img({ src: '', class: '' }),
    myComponent({}, [
      button({ onClick: () => {} })
    ]),
  ])

*/

/*

  const observer = new Observer();

  const componentLink = div({}, []);

  const addState = (component) => {
    return newObserver(component);
  }

  const myComponent = (parametetrs, children) => {
    const componentWithState = addState(div({}, []));

    return componentWithState;
  }

  const div = () => {

    const appendChild = (child) => {
      if (DOMElement) root.append(child)
      else if (Observer) {
        observer.subscribe((oldComponent, newComponent) => {
          oldComponent.replaceWith(newComponent);
        })
      }
    }

  }
*/

/*
  const addState = (component) => {
    const observer = new Observer(component);

    observer.addCheck((newComponent) => {
      const oldComponent = this.get();
      this.value = newComponent;

      oldComponent.replaceWith(newComponent);
    });

    return Observer;
  }

  const myComponent = (parametetrs, children) => {
    const componentWithState = addState(div({}, []));

    return componentWithState.get();
  }
*/

/*
  const myComponent = () => {
    const observer = new Observer(div({}, []));

    const onChange = (oldElement, newElement) => {
      oldElement.replace(newElement);
    }

    observer.addSubscriber(onChange);

    const state = newObserver(3);
    const state.addSubscriber((value) => {
      observer.set(div({...value...}, []));
    });

    const onClick = () => state.set(4);

    return observer.get();
  }
*/

/*
  const addState = (element, state) => {
    const observer = new Observer(element);

    const onChange = (oldElement, newElement) => {
      oldElement.replace(newElement);
    }

    observer.addSubscriber(onChange);

    state.addSubscriber(() => {

    });
  }

  const useState = () => {
    const state = newObserver(3);

    return state;
  };

  const myComponent = () => {
    const state = useState(3);

    const onClick = () => state.set(4);

    return addState(div({}, []), state);
  }
*/

/*
  const div = (parameters, children) => {
    return () => {
      const root = document.createElement('div');

      children.forEach((child) => {
        root.append(child());
      });

      return root;
    }
  }

  const addState = (element) => {
    const state = new Observer();
    return element(parameters, children);
  }

  const myComponent = () => {
    return div({}, []);
  }
*/

/*
  const myButton = ({
    onClick
  }) => {
    return ({ disabled }) => button({
      class: 'myButton',
      disabled,
      onCLick,
    });
  };

  const applyState = (component: Element, state) => {
    const element = new Observer(component);

    element.addSubscriber((oldComponent, newComponent) => {
      oldComponent.replaceWith(newComponent);
    });

    state.addSubscriber((newState) => {
      elelemnt.set(component(newState));
    })

    return element.get();
  }

  const myComponent = () => {
    const buttonState = createState({
      disabled: false,
      onClick: () => buttonState.set({
        disable: !buttonState.get().disabled,
        onClick: () =>
      })
    });

    return div({
      class: 'myClass'
    }, [
      applyState(myButton, buttonState),
    ])
  };
*/
