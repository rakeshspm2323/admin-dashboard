import { GrAd } from "react-icons/gr";
import { LuPackageOpen } from "react-icons/lu";
import { PiCarProfileLight } from "react-icons/pi";
import { RiHotelLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { PiPackageDuotone } from "react-icons/pi";
import Layout from "@/components/admin/Layout";


export default function AdminDashboard() {


    return (
  
            <Layout>
                <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

                    {/* Main Content */}
                    <h1 className="text-para font-bold mb-4">Dashboard</h1>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40 pt-5 overflow-hidden rounded-lg shadow-md">
                            {/* <SparklineChart /> */}
                            <div className="absolute right-5 top-5">
                                {/* <PiPackageDuotone className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40} /> */}
                            </div>
                        </div>

                        <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40 pt-5 overflow-hidden rounded-lg shadow-md">
                            {/* <SparklineChart2 /> */}
                            <div className="absolute right-5 top-5">
                                {/* <PiCarProfileLight className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40} /> */}
                            </div>
                        </div>

                        <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40 pt-5 overflow-hidden rounded-lg shadow-md">
                            {/* <SparklineChart3 /> */}
                            <div className="absolute right-5 top-5">
                                <RiHotelLine className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                            </div>
                        </div>

                        <div className="relative group border-l-2 border-teal-700 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 pt-5 overflow-hidden rounded-lg shadow-md">
                            {/* <SparklineChart4 /> */}
                           
                            <div className="absolute right-5 top-5">
                            <GiMoneyStack className="text-white group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
                        <div className="border-l-2 border-teal-700 pt-2 bg-white/30 backdrop-blur-lg px-1 rounded-lg object-contain shadow-md mt-5">
                            {/* <Chart1 /> */}
                        </div>
                        <div className="border-l-2 border-teal-700 pt-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
                            <div className="w-full m-auto -4">
                                {/* <RatingForm /> */}
                            </div>
                        </div>
                    </div>

                    {/* Lists and Tables Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
                        <div className="border-l-2 border-teal-700 p-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
                            {/* <Transaction /> */}
                        </div>
                        <div className="border-l-2 border-teal-700 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
                            <div className="px-2 py-1">
                                <p className="font-semibold text-md">Recent Post</p>
                            </div>
                            <div className="h-96 overflow-y-auto">
                                {/* {blogPosts?.map((item,i)=><BlogTable item={item} key={i} />)} */}
                            </div>
                        </div>
                    </div>
                    {/* Review Form */}
                    <h2 className="text-md font-semibold mt-5 leading-8">Review Form</h2>
                    <div className="border-l-2 border-teal-700 p-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-md">
                        {/* <ReviewForm /> */}
                    </div>

                </div>
            </Layout>
     
    );
}
