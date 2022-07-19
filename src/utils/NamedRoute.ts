type NamedRouteProps = {
  outlets: Array<{
    name: string;
    content: JSX.Element;
  }>;
  outletName?: string;
};

export const NamedRoute = (props: NamedRouteProps) => {
  const { outlets, outletName } = props;

  const matchedOutlet = outlets.find((outlet) => {
    return outlet.name === outletName;
  });

  if (!matchedOutlet) {
    return null;
  }
  return matchedOutlet.content;
};
