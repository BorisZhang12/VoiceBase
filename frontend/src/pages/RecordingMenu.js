import logo from '../logo.svg';
import ReactRecorder from "../components/ReactRecorder";

function recordingMenu() {

    return (
        <div className="flex flex-col justify-center align-middle items-center h-screen w-screen bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8">
                <h1 className="text-4xl font-bold mb-6 text-white">
                    Sounds to Record:
                </h1>

            <div className={"flex space-x-5"}>

                <div
                    className={'flex flex-col px-10 border py-4 px-6t mx-auto bg-white items-center p-2 rounded-2xl'}>
                    <ol className={"text-gray-700 space-y-2"}>
                        <h1 className={"text-[18px] font-bold text-gray-700"}>Sound List:</h1>
                        <li>
                            1. -gu
                        </li>
                        <li>
                            2. ud-
                        </li>
                        <li>
                            3. af
                        </li>
                        <li>
                            4. tr
                        </li>
                        <li>
                            5. -no
                        </li>
                        <li>
                            6. un-
                        </li>
                        <li>
                            7. -ju
                        </li>
                        <li>
                            8. -je
                        </li>
                        <li>
                            9. ez
                        </li>
                    </ol>
                </div>

                <ReactRecorder/>
            </div>
            <a href={"https://www.mediafire.com/file/xc60ff0f73hv9cb/CZloid+VCCV+2015.rar"} className={"p-2 text-blue-50 underline"}>Example sounds for download.</a>
        </div>
    )
}

export default recordingMenu;
