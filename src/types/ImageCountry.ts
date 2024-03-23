type TPhoto = {
  attribution: {
    license: string;
    photographer: string;
    site: string;
    source: string;
  };
  image: {
    mobile: string;
    web: string;
  };
};

export interface IImageCountry {
  _links: {curies: any; self: {href: string}};
  photos: TPhoto[];
}
