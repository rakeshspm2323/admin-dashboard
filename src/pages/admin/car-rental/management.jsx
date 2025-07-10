import { GrAd } from "react-icons/gr";
import { LuPackageOpen } from "react-icons/lu";
import { PiCarProfileLight } from "react-icons/pi";
import { RiHotelLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { PiPackageDuotone } from "react-icons/pi";
import Layout from "@/components/admin/Layout";
import ListingTable from "@/components/ListingTable";

export default function CarRentalManagement() {
  return (
    <Layout>
      <div className="md:px-5 px-0 pt-5 text-black">
        <h1 className="text-[18px] font-bold mb-4">Car Rental Management</h1>
        {/* Lists and Tables Section */}
          <div className="border-l-2 border-teal-700 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
            <div className="pl-5 py-5">
              <p className="font-semibold text-[16px]">Recent Post</p>
            </div>
            <div className="h-auto overflow-y-auto px-5">
              <ListingTable />
            </div>
          </div>
      </div>
    </Layout>
  );
}
