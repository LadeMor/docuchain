

const ProfilePage = () =>{
    return (
        <div className="ml-6 bg-white w-full p-10 shadow-md rounded-l-3xl">
            <div className="w-56 bg-gray-300 rounded-full p-2 mb-8">
                <img src="./icons/user.svg"/>
            </div>
            <div>
                <h1 className="text-2xl font-[family-name:var(--font-montserrat-semibold)] text-primary_text_color">Serhii Piatko</h1>
                <h1 className="text-2xl font-[family-name:var(--font-montserrat-semibold)] text-primary_text_color">email@gmail.com</h1>
            </div>
        </div>
    );
}

export default ProfilePage;