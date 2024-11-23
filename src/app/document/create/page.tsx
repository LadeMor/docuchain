

const CreateDocument = () => {
    return (
        <div className="ml-8 bg-white w-full p-12 rounded-l-2xl">
            <h1 className="text-primary_text_color text-2xl font-[family-name:var(--font-montserrat-semibold)] mb-2">
                New document
            </h1>
            <h2 className="text-primary_text_color text-base font-[family-name:var(--font-montserrat-medium)] mb-5">
                Add or create new document
            </h2>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className=" text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)] after:content-['*'] after:ml-0.5 after:text-red-500">
                        Document name
                    </label>
                    <input type="text" placeholder="Title..." className="text-base pt-3 pb-3 pl-4 pr-4 border-2 border-solid border-border_color rounded-xl font-[family-name:var(--font-montserrat-regular)]" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className=" text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)] after:content-['*'] after:ml-0.5 after:text-red-500">
                        Recipient
                    </label>
                    <input type="text" placeholder="Name..." className="text-base pt-3 pb-3 pl-4 pr-4 border-2 border-solid border-border_color rounded-xl font-[family-name:var(--font-montserrat-regular)]" />
                </div>
                <div className="flex flex-row justify-between gap-8 mb-5">
                    <div className="flex flex-col gap-2 flex-1">
                        <label className=" text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)] ">
                            Address
                        </label>
                        <input type="text" placeholder="Address..." className="text-base pt-3 pb-3 pl-4 pr-4 border-2 border-solid border-border_color rounded-xl font-[family-name:var(--font-montserrat-regular)]" />
                    </div>
                    <div className="flex flex-1 justify-between ">
                        <div className="flex flex-col gap-2">
                            <label className=" text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)] ">
                                Postal Code
                            </label>
                            <input type="text" placeholder="Address..." className="text-base pt-3 pb-3 pl-4 pr-4 border-2 border-solid border-border_color rounded-xl font-[family-name:var(--font-montserrat-regular)]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)] ">
                                Country
                            </label>
                            <input type="text" placeholder="Address..." className="text-base pt-3 pb-3 pl-4 pr-4 border-2 border-solid border-border_color rounded-xl font-[family-name:var(--font-montserrat-regular)]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)] ">
                            Province / State
                            </label>
                            <input type="text" placeholder="Address..." className="text-base pt-3 pb-3 pl-4 pr-4 border-2 border-solid border-border_color rounded-xl font-[family-name:var(--font-montserrat-regular)]" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-button_bg_color text-white text-sm font-[family-name:var(--font-montserrat-semibold)] pt-3 pb-3 pl-6 pr-6 rounded-2xl">Create / Add</button>
                </div>
            </form>
        </div>
    );
}

export default CreateDocument;