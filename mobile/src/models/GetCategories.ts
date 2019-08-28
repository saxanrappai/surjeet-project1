interface GetCategories {
    responce: boolean;
    data: Categories[];
}

interface Categories {
    id: string;
    title: string;
    slug: string;
    parent: string;
    leval: string;
    description: string;
    image: string;
    status: string;
    Count: string;
    PCount: string;
    sub_cat?: Subcat[];
}

interface Subcat {
    id: string;
    title: string;
    slug: string;
    parent: string;
    leval: string;
    description: string;
    image: string;
    status: string;
    Count: string;
    PCount: string;
    sub_cat?: Subcat[];
}