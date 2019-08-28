interface GetProducts {
    responce: boolean;
    data: Product[];
}

interface Product {
    product_id: string;
    product_name: string;
    category_id: string;
    size: string;
    product_description: string;
    deal_price: string;
    start_date: string;
    start_time: string;
    end_date: string;
    end_time: string;
    price: string;
    mrp: string;
    product_image: string;
    status: string;
    in_stock: string;
    unit_value: string;
    unit_value_total: string;
    unit: string;
    increament: string;
    rewards: string;
    stock: string;
    title: string;
    displayImage: string
    fullText: string;
}