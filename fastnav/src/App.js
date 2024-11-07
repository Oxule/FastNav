import {useAnimatedText} from "./useAnimatedText";

export default function App() {
    const [target, setTarget] = useAnimatedText("/home/oxule/test/");

    return (
        <>
            <div className={"mt-[150px]"}>
                <div className={"text-5xl text-center mb-[50px]"}>
                    Доберитесь до <div className={"inline text-accent"}>{target}</div>
                </div>
                <div className={"text-4xl text-center"}>/home/<input className={"bg-inputbg rounded-br-2xl rounded-tr-2xl"}/></div>
            </div>
        </>
      );
}