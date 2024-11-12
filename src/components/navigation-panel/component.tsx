import Link from "next/link";

const NavigationPanel = () => {
    return(
            <nav className="w-28 bg-white h-screen top-0 sticky flex flex-col items-center pt-7 pb-7 pl-9 pr-9 gap-12">
                <img src="./icons/Logo.png" />
                <div className="flex flex-col items-center gap-7">
                    <Link href="/">
                        <img src="./icons/alternate-file.svg" className="nav-icon-style" />
                    </Link>
                    <Link href="/profile-page">
                        <img src="./icons/user.svg" className="nav-icon-style" />
                    </Link>
                    <img src="./icons/work-bag.svg" className="nav-icon-style" />
                </div>
            </nav>
    );
}
export default NavigationPanel;