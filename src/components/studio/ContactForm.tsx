"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
const services = ["Video Production", "Motion Graphics", "SaaS Video", "Branding & Identity", "Personal Branding", "SEO & AI Search", "Paid Advertising", "Social Media Marketing", "Website & Ecommerce", "Something else"];
const budgets = ["Under ₹1 lakh", "₹1–3 lakh", "₹3–8 lakh", "₹8 lakh+", "Let’s discuss"];
export function ContactForm() {
 const router = useRouter();
 const [selectedServices,setServices] = useState<string[]>([]);
 const [budget,setBudget] = useState("");
 const [pending,setPending] = useState(false);
 const [error,setError] = useState("");
 const [consent,setConsent] = useState(false);
 async function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  if(pending) return;
  setError("");
  if(!selectedServices.length) {setError("Choose at least one service so we can direct your enquiry.");return;}
  const data = new FormData(event.currentTarget);
  const name=String(data.get("name")||"").trim(), email=String(data.get("email")||"").trim(), number=String(data.get("number")||"").trim();
  if(!name||!email||!number) {setError("Please add your name, email and phone number.");return;}
  setPending(true);
  try {
   const response = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ name,email,number,website:String(data.get("website")||"").trim(),service:selectedServices.join(", "),message:["Email: "+email,"Budget: "+(budget||"To discuss"),"Project brief:",String(data.get("message")||"").trim()].join("\n") }) });
   const result = await response.json();
   if(!response.ok||!result.success) throw new Error(result.message||"Your enquiry could not be sent. Please try again or email us.");
   router.push("/thank-you");
  } catch(reason) {setError(reason instanceof Error ? reason.message : "Your enquiry could not be sent. Please email us directly.");}
  finally {setPending(false);}
 }
 return <form className="studio-contact-form" onSubmit={submit} aria-busy={pending}><fieldset disabled={pending}><legend><span>01</span> What can we help with?</legend><div className="contact-choice-group" role="group" aria-label="Services you are interested in">{services.map(service=><button key={service} type="button" aria-pressed={selectedServices.includes(service)} onClick={()=>setServices(current=>current.includes(service)?current.filter(s=>s!==service):[...current,service])}>{selectedServices.includes(service)&&<Check size={13}/>} {service}</button>)}</div><h2 className="contact-section-label"><span>02</span> A little about you</h2><div className="contact-field-grid"><label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="How should we call you?" required maxLength={150}/></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}/></label><label>Phone number <span>*</span><input name="number" type="tel" autoComplete="tel" placeholder="Include your country code" required maxLength={40}/></label><label>Website <small>(optional)</small><input name="website" placeholder="Your brand or website" maxLength={500}/></label></div><label className="contact-message">Tell us what you have in mind <span>*</span><textarea name="message" placeholder="The idea, the audience, a deadline, or just the thing you want to make happen…" rows={4} required maxLength={10000}/></label><p className="contact-section-label"><span>03</span> A budget in mind?</p><div className="contact-choice-group" role="group" aria-label="Estimated budget">{budgets.map(value=><button type="button" key={value} aria-pressed={budget===value} onClick={()=>setBudget(budget===value?"":value)}>{value}</button>)}</div><label className="contact-consent"><input type="checkbox" checked={consent} onChange={event=>setConsent(event.target.checked)} required/><span>I’ve read the <Link href="/privacy-policy">privacy policy</Link> and agree to be contacted about this enquiry.</span></label>{error&&<p role="alert" className="contact-error">{error}</p>}<button type="submit" className="studio-button" disabled={pending}>{pending?<><Loader2 size={18} className="contact-spinner"/> Sending your brief…</>:<>Send your project brief <ArrowUpRight size={18}/></>}</button><p className="contact-form-note">You’ll be taken to a confirmation page once your enquiry is sent.</p></fieldset></form>;
}
