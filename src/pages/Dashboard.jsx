import React, { useState, useEffect } from "react";
import axios from "axios";
import Sales from "../components/charts/Sales";
import TotalProfit from "../components/charts/TotalProfit";
import OrderTable from "../components/tables/OrderTable";
import TopProductTable from "../components/tables/TopProductTable";
import { useLogin } from "../context/LoginContext";
import Card from "../components/Card";
import Summary from "../components/charts/Summary";
import Breadcrumb from "../components/common/Breadcrumb";

const Dashboard = () => {
  const { user, logout } = useLogin();
  const userStores = user ? user.userStores : [];

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [storeId, setStoreId] = useState(
    userStores.length ? userStores[0].id : "1"
  );
  const [tDate, setTDate] = useState(getTodayDate());
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/api/Home/Dashboard?storeid=${storeId}&tdate=${tDate}`
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized access - logging out.");
          logout();
        }
      }
    };

    if (storeId) {
      fetchData();
    }
  }, [storeId, tDate, logout]);

  const handleStoreIdChange = (event) => {
    setStoreId(event.target.value);
  };

  const handleDateChange = (event) => {
    setTDate(event.target.value);
  };

  if (!data)
    return (
      <div className="h-full flex items-center justify-center">Loading...</div>
    );

  const series = data.orderStatus.map((order) => parseInt(order.amt));
  const labels = data.orderStatus.map((order) => order.vBag || "Others");

  return (
    <div className="dark:text-white">
      <div className="flex items-center justify-between mb-5">
        <Breadcrumb pageName="Dashboard" />
        <div className="flex w-[400px] gap-3">
          <select
            id="storeId"
            value={storeId}
            onChange={handleStoreIdChange}
            className="form-select"
          >
            {userStores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.storeName}
              </option>
            ))}
          </select>

          <input
            type="date"
            id="tDate"
            value={tDate}
            onChange={handleDateChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 gap-6 mb-6">
        <div className="grid xl:grid-cols-2 col-span-2 gap-6">
          <Card title="Total Sales" value={data.totalSales} />
          <Card title="Total Customers" value={data.totalCustomers} />
          <Card title="Total Gas Volume" value={data.totalGasVol} />
          <Card title="Total Lottery Payout" value={data.totalLotteryPayout} />
          <Card title="Total No Sales" value={data.totalNoSales} />
          <Card title="Total Void Sales" value={data.totalVoidSales} />
        </div>

        <Summary
          title1="Gas Sales"
          value1={data.totalGasSales}
          title2="Merchant Sales"
          value2={data.totalMerchantSales}
          title3="Lottery Sales"
          value3={data.totalLotterySales}
        />
      </div>
      <div className="grid xl:grid-cols-3 gap-6 mb-6">
        <TotalProfit />
        {series.length > 0 && labels.length > 0 ? (
          <Sales series={series} labels={labels} />
        ) : (
          <Sales series={[0]} labels={["No Sale"]} />
        )}
      </div>

      <div className="grid xl:grid-cols-2 gap-6 mb-6">
        <OrderTable storeId={storeId} tDate={tDate} clientData={user} />
        <TopProductTable products={data.bestSellingProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
