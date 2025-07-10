import { GiMoneyStack } from "react-icons/gi";
import Layout from "@/components/admin/Layout";
import SparklineChart from "@/components/admin/SparklineChart";
import { PiCarProfileLight } from "react-icons/pi";
import SparklineChartTotal from "@/components/admin/SparklineChartTotal";

export default function AdminDashboard() {

    return (
  
            <Layout>
                <div className="md:px-5 px-0 pt-5 text-black">
                    <h1 className="text-para font-bold mb-4">Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">                            
                        <div className="relative group border-l-2 h-52 border-teal-700 backdrop-blur-xl bg-amber-50/40 pt-5 overflow-hidden rounded-lg shadow-md">
                            <SparklineChart />
                            <div className="absolute right-5 top-5">
                                <PiCarProfileLight className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                            </div>
                        </div>                         
                        <div className="relative group border-l-2 border-teal-700 bg-gradient-to-r from-cyan-500/50 pt-5 overflow-hidden rounded-lg shadow-md">
                            <SparklineChartTotal />
                            <div className="absolute right-5 top-5">
                                <GiMoneyStack className="text-white group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                            </div>
                        </div>                         
                    </div>
                </div>
            </Layout>
     
    );
}
