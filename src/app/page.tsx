import Image from "next/image";

export default function Home() {
    return (
        <div className="flex justify-start items-start">
            <nav className="w-28 bg-white h-screen sticky flex flex-col items-center pt-7 pb-7 pl-9 pr-9 gap-12">
                <img src="./icons/Logo.png" />
                <div className="flex flex-col items-center gap-7">
                    <img src="./icons/alternate-file.svg" className="nav-icon-style" />
                    <img src="./icons/user.svg" className="nav-icon-style" />
                    <img src="./icons/work-bag.svg" className="nav-icon-style" />
                </div>
            </nav>
            <div className="w-full">
                <div className="flex gap-8">
                    <div className="bg-nav_panel_bg w-64 h-screen pt-20 pb-20 pl-10 pr-10 flex flex-col items-start">
                        <div className="mb-7">
                            <h2 className="text-white text-base font-[family-name:var(--font-montserrat-semibold)] mb-7">Documents</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row items-center gap-4 cursor-pointer">
                                    <img src="./icons/folder.svg" className="" />
                                    <p className="text-white font-[family-name:var(--font-montserrat-medium)] text-sm">All Documents</p>
                                </div>
                                <div className="flex flex-row items-center gap-4 cursor-pointer">
                                    <img src="./icons/trash-delete-bin.svg" className="" />
                                    <p className="text-white font-[family-name:var(--font-montserrat-medium)] text-sm">Trash</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-white text-base font-[family-name:var(--font-montserrat-semibold)] mb-7">Filters</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4 items-center cursor-pointer">
                                    <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                                    <p className="text-white font-[family-name:var(--font-montserrat-medium)] text-sm">Draft</p>
                                </div>
                                <div className="flex gap-4 items-center cursor-pointer">
                                    <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                                    <p className="text-white font-[family-name:var(--font-montserrat-medium)] text-sm">Sent</p>
                                </div>
                                <div className="flex gap-4 items-center cursor-pointer">
                                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                                    <p className="text-white font-[family-name:var(--font-montserrat-medium)] text-sm">Sent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-white flex justify-end pt-6 pb-6 pr-12 rounded-bl-2xl shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="flex-col">
                                    <p className="text-end text-primary_text_color font-[family-name:var(--font-montserrat-semibold)]">Marianna</p>
                                    <p className="text-end  text-primary_text_color font-[family-name:var(--font-montserrat-light)]">Marianna@servicedeck.io</p>
                                </div>
                                <img src="./Person_placeholder.png"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
