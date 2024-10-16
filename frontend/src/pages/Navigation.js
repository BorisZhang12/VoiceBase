import { Outlet, Link } from "react-router-dom";

function Navigation(){
    return (
        <div className="flex flex-col justify-center items-center w-screen bg-gray-800">
            <nav>
                <ul className={"flex w-screen justify-center items-center"}>
                    <li className={"p-5 px-4 text-white font-bold hover:bg-gray-700"}>
                        <Link to="/" className={"px-10"}>Home</Link>
                    </li>
                    <li className={"p-5 px-4 text-white font-bold hover:bg-gray-700"}>
                        <Link to="/recordingMenu" className={"px-8"}>Record</Link>
                    </li>
                    <li className={"p-5 px-4 text-white font-bold hover:bg-gray-700"}>
                        <Link to="/download" className={"px-6"}>Download</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </div>
    )
};

export default Navigation;