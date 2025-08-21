export interface Property {
    /** Unique identifier used in the url */
    slug: string;
    /** Title of the property */
    title: string;
    /** Address of the property */
    address: string;
    /** Monthly rental price */
    price: number;
    /** A brief description of the property (use markdown) */
    description: string;
    /** Number of bedrooms */
    bedrooms: number;
    /** Number of bathrooms */
    bathrooms: number;
    /** Total Square Footage */
    sqft: number;
    /** Current Availability Status */
    status: 'For Rent' | 'Rented';
    /** Array of images for the property */
    images: string[];
    /** Optional flag to feature on homepage */
    featured?: boolean;
}
