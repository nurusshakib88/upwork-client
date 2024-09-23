import React from "react";
import { Link } from "react-router-dom";
import IconMultipleForwardRight from "../../components/Icon/IconMultipleForwardRight";

const RecentOrders = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div className="panel h-full w-full">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Recent Orders
          </h5>
        </div>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th className="rounded-l-md rtl:rounded-r-md">Customer</th>
                <th>Product</th>
                <th>Invoice</th>
                <th>Price</th>
                <th className="rounded-r-md rtl:rounded-l-md">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="min-w-[150px] text-black dark:text-white">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/profile-6.jpeg"
                      alt="avatar"
                    />
                    <span className="whitespace-nowrap">Luke Ivory</span>
                  </div>
                </td>
                <td className="text-primary">Headphone</td>
                <td>
                  <Link to="/apps/invoice/preview">#46894</Link>
                </td>
                <td>$56.07</td>
                <td>
                  <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/profile-7.jpeg"
                      alt="avatar"
                    />
                    <span className="whitespace-nowrap">Andy King</span>
                  </div>
                </td>
                <td className="text-info">Nike Sport</td>
                <td>
                  <Link to="/apps/invoice/preview">#76894</Link>
                </td>
                <td>$126.04</td>
                <td>
                  <span className="badge bg-secondary shadow-md dark:group-hover:bg-transparent">
                    Shipped
                  </span>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/profile-8.jpeg"
                      alt="avatar"
                    />
                    <span className="whitespace-nowrap">Laurie Fox</span>
                  </div>
                </td>
                <td className="text-warning">Sunglasses</td>
                <td>
                  <Link to="/apps/invoice/preview">#66894</Link>
                </td>
                <td>$56.07</td>
                <td>
                  <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/profile-9.jpeg"
                      alt="avatar"
                    />
                    <span className="whitespace-nowrap">Ryan Collins</span>
                  </div>
                </td>
                <td className="text-danger">Sport</td>
                <td>
                  <Link to="/apps/invoice/preview">#75844</Link>
                </td>
                <td>$110.00</td>
                <td>
                  <span className="badge bg-secondary shadow-md dark:group-hover:bg-transparent">
                    Shipped
                  </span>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/profile-10.jpeg"
                      alt="avatar"
                    />
                    <span className="whitespace-nowrap">Irene Collins</span>
                  </div>
                </td>
                <td className="text-secondary">Speakers</td>
                <td>
                  <Link to="/apps/invoice/preview">#46894</Link>
                </td>
                <td>$56.07</td>
                <td>
                  <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel h-full w-full">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Top Selling Product
          </h5>
        </div>
        <div className="table-responsive">
          <table>
            <thead>
              <tr className="border-b-0">
                <th className="rounded-l-md rtl:rounded-r-md">Product</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Sold</th>
                <th className="rounded-r-md rtl:rounded-l-md">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="min-w-[150px] text-black dark:text-white">
                  <div className="flex">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/product-headphones.jpg"
                      alt="avatar"
                    />
                    <p className="whitespace-nowrap">
                      Headphone
                      <span className="text-primary block text-xs">
                        Digital
                      </span>
                    </p>
                  </div>
                </td>
                <td>$168.09</td>
                <td>$60.09</td>
                <td>170</td>
                <td>
                  <Link className="text-danger flex items-center" to="/">
                    <IconMultipleForwardRight className="rtl:rotate-180 mr-1 rtl:ml-1" />
                    Direct
                  </Link>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/product-shoes.jpg"
                      alt="avatar"
                    />
                    <p className="whitespace-nowrap">
                      Shoes{" "}
                      <span className="text-warning block text-xs">
                        Faishon
                      </span>
                    </p>
                  </div>
                </td>
                <td>$126.04</td>
                <td>$47.09</td>
                <td>130</td>
                <td>
                  <Link className="text-success flex items-center" to="/">
                    <IconMultipleForwardRight className="rtl:rotate-180 mr-1 rtl:ml-1" />
                    Google
                  </Link>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/product-watch.jpg"
                      alt="avatar"
                    />
                    <p className="whitespace-nowrap">
                      Watch{" "}
                      <span className="text-danger block text-xs">
                        Accessories
                      </span>
                    </p>
                  </div>
                </td>
                <td>$56.07</td>
                <td>$20.00</td>
                <td>66</td>
                <td>
                  <Link className="text-warning flex items-center" to="/">
                    <IconMultipleForwardRight className="rtl:rotate-180 mr-1 rtl:ml-1" />
                    Ads
                  </Link>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/product-laptop.jpg"
                      alt="avatar"
                    />
                    <p className="whitespace-nowrap">
                      Laptop{" "}
                      <span className="text-primary block text-xs">
                        Digital
                      </span>
                    </p>
                  </div>
                </td>
                <td>$110.00</td>
                <td>$33.00</td>
                <td>35</td>
                <td>
                  <Link className="text-secondary flex items-center" to="/">
                    <IconMultipleForwardRight className="rtl:rotate-180 mr-1 rtl:ml-1" />
                    Email
                  </Link>
                </td>
              </tr>
              <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                <td className="text-black dark:text-white">
                  <div className="flex">
                    <img
                      className="w-8 h-8 rounded-md mr-3 rtl:ml-3 object-cover"
                      src="/assets/images/product-camera.jpg"
                      alt="avatar"
                    />
                    <p className="whitespace-nowrap">
                      Camera{" "}
                      <span className="text-primary block text-xs">
                        Digital
                      </span>
                    </p>
                  </div>
                </td>
                <td>$56.07</td>
                <td>$26.04</td>
                <td>30</td>
                <td>
                  <Link className="text-primary flex items-center" to="/">
                    <IconMultipleForwardRight className="rtl:rotate-180 mr-1 rtl:ml-1" />
                    Referral
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
