"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {


    const [documentList, setDocumentList] = useState([
        {
            id: 1,
            documentName: "Test Document 1",
            recipient: "Emma",
            creationDate: "10/11/2023",
            status: "Sent",
            modified: "14/03/2023 00:00:00"
        },
        {
            id: 2,
            documentName: "Test Document 2",
            recipient: "Sophia",
            creationDate: "26/1/2023",
            status: "Draft",
            modified: "09/03/2024 00:00:00"
        },
        {
            id: 3,
            documentName: "Test Document 3",
            recipient: "Charlie",
            creationDate: "13/6/2023",
            status: "Signed",
            modified: "10/10/2024 00:00:00"
        },
        {
            id: 4,
            documentName: "Test Document 4",
            recipient: "John",
            creationDate: "18/2/2023",
            status: "Signed",
            modified: "04/08/2024 00:00:00"
        },
        {
            id: 5,
            documentName: "Test Document 5",
            recipient: "John",
            creationDate: "16/6/2023",
            status: "Signed",
            modified: "18/07/2023 00:00:00"
        },
        {
            id: 6,
            documentName: "Test Document 5",
            recipient: "John",
            creationDate: "16/6/2023",
            status: "Signed",
            modified: "18/07/2023 00:00:00"
        },
        {
            id: 7,
            documentName: "Test Document 5",
            recipient: "John",
            creationDate: "16/6/2023",
            status: "Signed",
            modified: "18/07/2023 00:00:00"
        },
        {
            id: 8,
            documentName: "Test Document 5",
            recipient: "John",
            creationDate: "16/6/2023",
            status: "Signed",
            modified: "18/07/2023 00:00:00"
        },
        {
            id: 9,
            documentName: "Test Document 5",
            recipient: "John",
            creationDate: "16/6/2023",
            status: "Signed",
            modified: "18/07/2023 00:00:00"
        },
        {
            id: 10,
            documentName: "Test Document 5",
            recipient: "John",
            creationDate: "16/6/2023",
            status: "Signed",
            modified: "18/07/2023 00:00:00"
        },
    ]);

    const selectStatusColor = (status: string) => {
        switch (status) {
            case "Draft":
                return "bg-gray-200";
                break;
            case "Sent":
                return "bg-yellow-200";
            case "Signed":
                return "bg-green-300";
            default:
                return "";
                break;
        }
    }

    // const date = new Date()
    // console.log(date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    return (

        <div className="w-full">
            <div className="flex gap-8">
                <div className="bg-nav_panel_bg w-64 h-screen sticky top-0 pt-20 pb-20 pl-10 pr-10 flex flex-col items-start">
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
                                <p className="text-white font-[family-name:var(--font-montserrat-medium)] text-sm">Signed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="bg-white flex justify-end pt-6 pb-6 pr-12 rounded-bl-2xl shadow-lg mb-6">
                        <div className="flex items-center gap-3">
                            <div className="flex-col">
                                <p className="text-end text-primary_text_color font-[family-name:var(--font-montserrat-semibold)]">Marianna</p>
                                <p className="text-end  text-primary_text_color font-[family-name:var(--font-montserrat-light)]">Marianna@servicedeck.io</p>
                            </div>
                            <img src="./Person_placeholder.png" className="cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center pl-9 pr-9 mb-9">
                        <button className="flex bg-button_bg_color 
                            text-white font-[family-name:var(--font-montserrat-semibold)] 
                            gap-3 p-3 rounded-2xl shadow-md">
                            <img src="./icons/file-add.svg" />
                            Add new document
                        </button>
                        <div className="flex items-center gap-8">
                            <div className="relative flex items-center text-primary_text_color">
                                <img src="./icons/search.svg" className="absolute w-9" />
                                <input type="text" placeholder="Search" className="pl-11 pt-3 pb-3  border-0 border-b-2 border-primary_text_color bg-transparent" />
                            </div>
                            <button className="flex bg-button_bg_color 
                            text-white font-[family-name:var(--font-montserrat-semibold)] 
                            gap-3 p-3 rounded-2xl shadow-md">
                                <img src="./icons/filter.svg" />
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="bg-white pt-10 pb-12 pl-9 pr-7 rounded-l-3xl shadow-md">
                        <table className="w-full">
                            <tbody>
                                <tr className="">
                                    <th className="table-header-style">Document Name</th>
                                    <th className="table-header-style">Recipient</th>
                                    <th className="table-header-style">Date Created</th>
                                    <th className="table-header-style">Status</th>
                                    <th className="table-header-style">Modified</th>
                                    <th className="table-header-style"></th>
                                </tr>
                                {documentList.length > 0 ?
                                    documentList.map((item, index) => (
                                        <tr className="border-t-2 " key={item.id}>
                                            <td className="pt-6 pb-6 
                                                font-[family-name:var(--font-montserrat-medium)] 
                                                text-primary_text_color">{item.documentName}</td>
                                            <td className="pt-6 pb-6 
                                                font-[family-name:var(--font-montserrat-light)]">{item.recipient}</td>
                                            <td className="pt-6 pb-6 
                                                font-[family-name:var(--font-montserrat-medium)] 
                                                text-primary_text_color" >{item.creationDate}</td>
                                            <td className="pt-6 pb-6 
                                                font-[family-name:var(--font-montserrat-medium)] 
                                                text-primary_text_color flex items-center gap-3">
                                                <div className={`w-3 h-3 ${selectStatusColor(item.status)} rounded-full`}></div>
                                                <p>{item.status}</p>
                                            </td>
                                            <td className="pt-6 pb-6 font-[family-name:var(--font-montserrat-medium)] text-primary_text_color">2 hours ago</td>
                                            <th className=""></th>
                                        </tr>
                                    ))
                                    :
                                    <h1>Loading...</h1>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
