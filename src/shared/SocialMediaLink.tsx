type Props = {
  logo: string;
};

const SocialMediaLink = ({ logo }: Props) => {
  return (
    <div className="bg-primary-500 w-7 h-7 rounded-sm p-0.5">
      <a href="" className="w-full h-full">
        <img src={logo} className="h-full mx-auto" />
      </a>
    </div>
  );
};

export default SocialMediaLink;
