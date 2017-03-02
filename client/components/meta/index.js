import withSideEffect from 'react-side-effect';


const reducePropsToState = (componentsProps) => {
  let state = {};

  componentsProps.forEach((componentProps) => {
    state = { ...state, ...componentProps };
  });

  if (state.title && state.titleTemplate) {
    state.title = state.titleTemplate.replace('%s', state.title);
  }

  if (!state.title) {
    state.title = state.defaultTitle;
  }

  return state;
}

const handleChangeOnClient = (state) => {
  document.title = state.title;
};

let Meta = () => (null)
Meta = withSideEffect(reducePropsToState, handleChangeOnClient)(Meta);

export default Meta;
