export type ServiceFamily = "Film & motion" | "SEO & AI search" | "Paid advertising" | "Brand & social" | "Web & commerce";
export interface StudioService {
 slug:string; name:string; title:string; family:ServiceFamily; description:string; hero:[string,string]; intro:string;
 insight:{title:string;paragraphs:string[]}; decisions:{title:string;body:string}[]; deliverables:{title:string;body:string}[];
 example:{title:string;brief:string;plan:string;measure:string}; faqs:[string,string][];
 related:string[]; reading:string[]; sources?:{title:string;url:string}[]; gallery?:"production"|"motion";
}
