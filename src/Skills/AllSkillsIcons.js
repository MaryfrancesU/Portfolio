import { ReactComponent as HTMLIcon } from "../shared/icons/html.svg";
import { ReactComponent as CSSIcon } from "../shared/icons/css.svg";
import { ReactComponent as JavascriptIcon } from "../shared/icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../shared/icons/react.svg";
import { ReactComponent as NextJSIcon } from "../shared/icons/nextjs.svg";
import { ReactComponent as MuiIcon } from "../shared/icons/mui.svg";
import { ReactComponent as TailwindIcon } from "../shared/icons/tailwind.svg";
import { ReactComponent as PythonIcon } from "../shared/icons/python.svg";
import { ReactComponent as JavaIcon } from "../shared/icons/java.svg";
import { ReactComponent as CSharpIcon } from "../shared/icons/csharp.svg";
import { ReactComponent as SwiftIcon } from "../shared/icons/swift.svg";
import { ReactComponent as AndroidStudioIcon } from "../shared/icons/android.svg";
import { ReactComponent as IonicIcon } from "../shared/icons/ionic.svg";
import { ReactComponent as AzureIcon } from "../shared/icons/azure.svg";
import { ReactComponent as AwsIcon } from "../shared/icons/aws.svg";
import { ReactComponent as DotnetIcon } from "../shared/icons/dotnet.svg";
import { ReactComponent as SqlIcon } from "../shared/icons/sqlicon.svg";

const AllSkillsIcons = () => {
  return (
    <>
      <HTMLIcon />
      <CSSIcon />
      <JavascriptIcon />
      <ReactIcon />
      <NextJSIcon />
      <MuiIcon />
      <TailwindIcon />
      <PythonIcon />
      <JavaIcon />
      <CSharpIcon />
      <SwiftIcon />
      <AndroidStudioIcon />
      <IonicIcon />
      <AzureIcon />
      <AwsIcon className="iconToInvert" />
      <DotnetIcon />
      <SqlIcon />
    </>
  );
};

export default AllSkillsIcons;
