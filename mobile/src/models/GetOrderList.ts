interface GetOrderList {
    today_orders: Todayorder[];
}

interface Todayorder {
    sale_id: string;
    user_id: string;
    on_date: string;
    delivery_time_from: string;
    delivery_time_to: string;
    status: string;
    note: string;
    is_paid: string;
    total_amount: string;
    total_rewards: string;
    total_kg: string;
    total_items: string;
    socity_id: string;
    delivery_address: string;
    location_id: string;
    delivery_charge: string;
    new_store_id: string;
    assign_to: string;
    payment_method: string;
    user_name: string;
    user_email: string;
    user_phone: string;
    user_fullname: string;
    user_password: string;
    user_type_id: string;
    user_bdate: string;
    is_email_varified: string;
    varified_token: string;
    user_gcm_code: string;
    user_ios_token: string;
    user_status: string;
    user_image: string;
    user_city: string;
    user_login_status: string;
    quantity: string;
    category_title: string;
    items: string;
    product_list: string[];
    pids: String[];
    product_title: string;
    pTitles: string[];
    driver_details: Driverdetail[];
}

interface Driverdetail {
    driver_id: string;
    driver_name: string;
    driver_vehicle_no: string;
    driver_phone: string;
    driver_image: string;
    driver_address: string;
    driver_status: string;
}