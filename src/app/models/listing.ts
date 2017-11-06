export class Listing {
    public id: number;
    public make: string;
    public model: string;
    public finish: string;
    public year: number;
    public title: string;
    public created_at: any;
    public shop_name: string;
    public shop: {
      slug: string;
      preferred_seller: boolean;
     };
    public description: string;
    public condition: {
      uuid: string;
      display_name: string;
      slug: string;
    };
    public price: {
      tax_included: boolean;
      amount: string;
      amount_cents: number;
      currency: string;
      symbol: string;
      display: string;
    };
    public inventory: number;
    public has_inventory: boolean;
    public offers_enabled: boolean;
    public categories: [
      {
        uuid: string;
        full_name: string;
      }
    ];
    public listing_currency: string;
    public published_at: string;
    public state: {
      slug: string;
      description: string;
    };
    public auction: boolean;
    public shop_id: string;
    public price_guide_id: string;
    public shipping: {
      local: boolean;
      rates: [
        {
          region_code: string;
          rate: {
            amount: string;
            amount_cents: number;
            currency: string;
            symbol: string;
            display: string;
          }
        }
      ];
      initial_offer_rate: {
        region_code: string;
        rate: {
          original: {
            amount: string;
            amount_cents: number;
            currency: string;
            symbol: string;
            display: string;
          },
          display: {
            amount: string;
            amount_cents: number;
            currency: string;
            symbol: string;
            display: string;
          }
        }
      }
    };
    public price_drop: {
      percent: number;
      display: string;
      original_price: {
        tax_included: boolean;
        amount: string;
        amount_cents: number;
        currency: string;
        symbol: string;
        display: string;
      }
    };
    public links: {
      photo: {
        href: string;
      };
      self: {
        href: string;
      };
      edit: {
        href: string;
      };
      web: {
        href: string;
      };
      make_offer: {
        href: string;
        method: string;
      };
      cart: {
        href: string;
      };
      watchlist: {
        href: string;
      }
    };
    public photos: [
      {
        _links: {
          large_crop: {
            href: string;
          };
          small_crop: {
            href: string;
          },
          full: {
            href: string;
          },
          thumbnail: {
            href: string;
          }
        }
      }
    ];
}



