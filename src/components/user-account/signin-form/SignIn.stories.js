import SignIn from "./SignIn";

export default {
  title: "Components/SignIn Form",
  component: SignIn,
  tags: ["autodocs"],
};

const Template = (args) => <SignIn {...args} />;

export const Default = Template.bind({});

Default.args = {
  isDarkMode: false,
  isSignUp: false,
};
