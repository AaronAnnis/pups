"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  homeType: string;
  ownOrRent: string;
  landlordAllowsPets: string;
  fencedYard: string;
  fenceHeight: string;
  currentPets: string;
  currentPetsDescription: string;
  ownedDogsBefore: string;
  breedExperience: string;
  children: string;
  activityLevel: string;
  workSchedule: string;
  hoursAlone: string;
  genderPreference: string;
  colorPreference: string;
  otherPreferences: string;
  vetName: string;
  vetClinic: string;
  vetPhone: string;
  hearAboutUs: string;
  whyInterested: string;
  anythingElse: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  homeType: "",
  ownOrRent: "",
  landlordAllowsPets: "",
  fencedYard: "",
  fenceHeight: "",
  currentPets: "",
  currentPetsDescription: "",
  ownedDogsBefore: "",
  breedExperience: "",
  children: "",
  activityLevel: "",
  workSchedule: "",
  hoursAlone: "",
  genderPreference: "",
  colorPreference: "",
  otherPreferences: "",
  vetName: "",
  vetClinic: "",
  vetPhone: "",
  hearAboutUs: "",
  whyInterested: "",
  anythingElse: "",
};

function Label({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-text-dark">
      {children}
      {required && <span className="ml-0.5 text-red-500">*</span>}
    </label>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 border-b border-primary/20 pb-2 font-heading text-xl text-text-dark">
      {children}
    </h3>
  );
}

const inputClasses = "w-full rounded-lg border border-gray-300 px-4 py-3 text-text-body transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none";
const selectClasses = `${inputClasses} appearance-none bg-white`;

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => (
        <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-sm text-text-body">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="h-4 w-4 accent-primary"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

export function ApplicationForm() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    const required: { field: keyof FormData; label: string }[] = [
      { field: "fullName", label: "Full Name" },
      { field: "email", label: "Email" },
      { field: "phone", label: "Phone Number" },
      { field: "street", label: "Street Address" },
      { field: "city", label: "City" },
      { field: "state", label: "State" },
      { field: "zip", label: "Zip" },
      { field: "homeType", label: "Home Type" },
      { field: "ownOrRent", label: "Own or Rent" },
      { field: "genderPreference", label: "Gender Preference" },
      { field: "vetName", label: "Veterinarian Name" },
      { field: "vetClinic", label: "Veterinary Clinic" },
      { field: "vetPhone", label: "Veterinarian Phone" },
      { field: "whyInterested", label: "Why interested" },
    ];

    for (const { field, label } of required) {
      if (!form[field].trim()) {
        newErrors[field] = `${label} is required`;
      }
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (form.phone && !/^[\d\s()+-]{7,}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mb-4 font-heading text-2xl text-text-dark">Thank You for Your Application!</h3>
        <p className="mx-auto max-w-lg text-text-body leading-relaxed">
          We&apos;ve received your information and will review it within 48 hours. You&apos;ll hear from us
          by email at <span className="font-semibold text-primary">{form.email}</span>. We look forward
          to getting to know you!
        </p>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm md:p-10">
      {status === "error" && (
        <div className="mb-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again.
        </div>
      )}

      {hasErrors && (
        <div className="mb-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Please fix the highlighted fields below.
        </div>
      )}

      {/* Section 1: Personal Information */}
      <section className="mb-10">
        <SectionHeading>Personal Information</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="fullName" required>Full Name</Label>
            <input id="fullName" type="text" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputClasses} />
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
          </div>
          <div>
            <Label htmlFor="email" required>Email</Label>
            <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClasses} />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="phone" required>Phone Number</Label>
            <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClasses} />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="street" required>Street Address</Label>
            <input id="street" type="text" value={form.street} onChange={(e) => update("street", e.target.value)} className={inputClasses} />
            {errors.street && <p className="mt-1 text-xs text-red-500">{errors.street}</p>}
          </div>
          <div>
            <Label htmlFor="city" required>City</Label>
            <input id="city" type="text" value={form.city} onChange={(e) => update("city", e.target.value)} className={inputClasses} />
            {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
          </div>
          <div>
            <Label htmlFor="state" required>State</Label>
            <input id="state" type="text" value={form.state} onChange={(e) => update("state", e.target.value)} className={inputClasses} />
            {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
          </div>
          <div>
            <Label htmlFor="zip" required>Zip Code</Label>
            <input id="zip" type="text" value={form.zip} onChange={(e) => update("zip", e.target.value)} className={inputClasses} />
            {errors.zip && <p className="mt-1 text-xs text-red-500">{errors.zip}</p>}
          </div>
        </div>
      </section>

      {/* Section 2: Living Situation */}
      <section className="mb-10">
        <SectionHeading>Living Situation</SectionHeading>
        <div className="space-y-5">
          <div>
            <Label htmlFor="homeType" required>Home Type</Label>
            <select id="homeType" value={form.homeType} onChange={(e) => update("homeType", e.target.value)} className={selectClasses}>
              <option value="">Select...</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="farm">Farm / Rural</option>
            </select>
            {errors.homeType && <p className="mt-1 text-xs text-red-500">{errors.homeType}</p>}
          </div>
          <div>
            <Label htmlFor="ownOrRent" required>Do you own or rent?</Label>
            <RadioGroup name="ownOrRent" value={form.ownOrRent} onChange={(v) => update("ownOrRent", v)} options={[{ value: "own", label: "Own" }, { value: "rent", label: "Rent" }]} />
            {errors.ownOrRent && <p className="mt-1 text-xs text-red-500">{errors.ownOrRent}</p>}
          </div>
          {form.ownOrRent === "rent" && (
            <div>
              <Label htmlFor="landlordAllowsPets">Does your landlord allow pets?</Label>
              <RadioGroup name="landlordAllowsPets" value={form.landlordAllowsPets} onChange={(v) => update("landlordAllowsPets", v)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "na", label: "N/A" }]} />
            </div>
          )}
          <div>
            <Label htmlFor="fencedYard">Do you have a fenced yard?</Label>
            <RadioGroup name="fencedYard" value={form.fencedYard} onChange={(v) => update("fencedYard", v)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
          </div>
          {form.fencedYard === "yes" && (
            <div>
              <Label htmlFor="fenceHeight">Approximate fence height</Label>
              <input id="fenceHeight" type="text" value={form.fenceHeight} onChange={(e) => update("fenceHeight", e.target.value)} placeholder="e.g. 6 feet" className={inputClasses} />
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Pet Experience */}
      <section className="mb-10">
        <SectionHeading>Pet Experience</SectionHeading>
        <div className="space-y-5">
          <div>
            <Label htmlFor="currentPets">Do you currently have pets?</Label>
            <RadioGroup name="currentPets" value={form.currentPets} onChange={(v) => update("currentPets", v)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
          </div>
          {form.currentPets === "yes" && (
            <div>
              <Label htmlFor="currentPetsDescription">Please describe your current pets (species, breeds, ages)</Label>
              <textarea id="currentPetsDescription" value={form.currentPetsDescription} onChange={(e) => update("currentPetsDescription", e.target.value)} rows={3} className={inputClasses} />
            </div>
          )}
          <div>
            <Label htmlFor="ownedDogsBefore">Have you owned dogs before?</Label>
            <RadioGroup name="ownedDogsBefore" value={form.ownedDogsBefore} onChange={(v) => update("ownedDogsBefore", v)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
          </div>
          <div>
            <Label htmlFor="breedExperience">Do you have experience with this breed or similar breeds?</Label>
            <textarea id="breedExperience" value={form.breedExperience} onChange={(e) => update("breedExperience", e.target.value)} rows={3} placeholder="Tell us about your experience..." className={inputClasses} />
          </div>
        </div>
      </section>

      {/* Section 4: Lifestyle */}
      <section className="mb-10">
        <SectionHeading>Lifestyle</SectionHeading>
        <div className="space-y-5">
          <div>
            <Label htmlFor="children">Do you have children? If so, what ages?</Label>
            <input id="children" type="text" value={form.children} onChange={(e) => update("children", e.target.value)} placeholder="e.g. Yes, ages 5 and 8" className={inputClasses} />
          </div>
          <div>
            <Label htmlFor="activityLevel">How would you describe your activity level?</Label>
            <select id="activityLevel" value={form.activityLevel} onChange={(e) => update("activityLevel", e.target.value)} className={selectClasses}>
              <option value="">Select...</option>
              <option value="very-active">Very Active</option>
              <option value="active">Active</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low Activity</option>
            </select>
          </div>
          <div>
            <Label htmlFor="workSchedule">What is your typical work schedule?</Label>
            <select id="workSchedule" value={form.workSchedule} onChange={(e) => update("workSchedule", e.target.value)} className={selectClasses}>
              <option value="">Select...</option>
              <option value="wfh">Work from home</option>
              <option value="office">Office (8-5)</option>
              <option value="hybrid">Hybrid</option>
              <option value="variable">Variable / Shift work</option>
              <option value="retired">Retired</option>
            </select>
          </div>
          <div>
            <Label htmlFor="hoursAlone">How many hours per day would the puppy be alone?</Label>
            <select id="hoursAlone" value={form.hoursAlone} onChange={(e) => update("hoursAlone", e.target.value)} className={selectClasses}>
              <option value="">Select...</option>
              <option value="0-2">0-2 hours</option>
              <option value="2-4">2-4 hours</option>
              <option value="4-6">4-6 hours</option>
              <option value="6-8">6-8 hours</option>
              <option value="8+">8+ hours</option>
            </select>
          </div>
        </div>
      </section>

      {/* Section 5: Puppy Preferences */}
      <section className="mb-10">
        <SectionHeading>Puppy Preferences</SectionHeading>
        <div className="space-y-5">
          <div>
            <Label htmlFor="genderPreference" required>Gender Preference</Label>
            <select id="genderPreference" value={form.genderPreference} onChange={(e) => update("genderPreference", e.target.value)} className={selectClasses}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="no-preference">No Preference</option>
            </select>
            {errors.genderPreference && <p className="mt-1 text-xs text-red-500">{errors.genderPreference}</p>}
          </div>
          <div>
            <Label htmlFor="colorPreference">Color Preference</Label>
            <input id="colorPreference" type="text" value={form.colorPreference} onChange={(e) => update("colorPreference", e.target.value)} placeholder="Optional" className={inputClasses} />
          </div>
          <div>
            <Label htmlFor="otherPreferences">Any other preferences or requirements?</Label>
            <textarea id="otherPreferences" value={form.otherPreferences} onChange={(e) => update("otherPreferences", e.target.value)} rows={3} placeholder="Optional" className={inputClasses} />
          </div>
        </div>
      </section>

      {/* Section 6: Veterinary Reference */}
      <section className="mb-10">
        <SectionHeading>Veterinary Reference</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="vetName" required>Veterinarian Name</Label>
            <input id="vetName" type="text" value={form.vetName} onChange={(e) => update("vetName", e.target.value)} className={inputClasses} />
            {errors.vetName && <p className="mt-1 text-xs text-red-500">{errors.vetName}</p>}
          </div>
          <div>
            <Label htmlFor="vetClinic" required>Veterinary Clinic Name</Label>
            <input id="vetClinic" type="text" value={form.vetClinic} onChange={(e) => update("vetClinic", e.target.value)} className={inputClasses} />
            {errors.vetClinic && <p className="mt-1 text-xs text-red-500">{errors.vetClinic}</p>}
          </div>
          <div>
            <Label htmlFor="vetPhone" required>Veterinarian Phone Number</Label>
            <input id="vetPhone" type="tel" value={form.vetPhone} onChange={(e) => update("vetPhone", e.target.value)} className={inputClasses} />
            {errors.vetPhone && <p className="mt-1 text-xs text-red-500">{errors.vetPhone}</p>}
          </div>
        </div>
      </section>

      {/* Section 7: Additional Information */}
      <section className="mb-10">
        <SectionHeading>Additional Information</SectionHeading>
        <div className="space-y-5">
          <div>
            <Label htmlFor="hearAboutUs">How did you hear about Goose River Canine Co.?</Label>
            <select id="hearAboutUs" value={form.hearAboutUs} onChange={(e) => update("hearAboutUs", e.target.value)} className={selectClasses}>
              <option value="">Select...</option>
              <option value="google">Google</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="referral">Friend / Referral</option>
              <option value="directory">Breeder Directory</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="whyInterested" required>Why are you interested in a puppy from us?</Label>
            <textarea id="whyInterested" value={form.whyInterested} onChange={(e) => update("whyInterested", e.target.value)} rows={4} className={inputClasses} />
            {errors.whyInterested && <p className="mt-1 text-xs text-red-500">{errors.whyInterested}</p>}
          </div>
          <div>
            <Label htmlFor="anythingElse">Is there anything else you&apos;d like us to know?</Label>
            <textarea id="anythingElse" value={form.anythingElse} onChange={(e) => update("anythingElse", e.target.value)} rows={3} placeholder="Optional" className={inputClasses} />
          </div>
        </div>
      </section>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
