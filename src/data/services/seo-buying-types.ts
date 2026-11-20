export interface SeoBuyingSection {
  id: string;
  title: string;
  style?: "pricing" | "scope" | "example";
  paragraphs?: string[];
  details?: { id?: string; title: string; body: string }[];
  source?: { title: string; url: string };
}

export interface SeoBuyingPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  heading: [string, string];
  intro: string;
  sections: SeoBuyingSection[];
  faqs: [question: string, answer: string][];
  related: string[];
  inquiry: { label: string; prompt: string };
}
