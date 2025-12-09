"use client";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Spinner } from "@/components/atoms/Spinner";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "d6eb4d15-e321-402b-ae3a-9a030f494152");
    formData.append("from_name", "Power Fit Website");
    formData.append("subject", "Nowa wiadomość z formularza kontaktowego");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((response) => response.json());

      if (response.success) {
        toast("Wiadomość wysłana! 💪", {
          description:
            "Dziękujemy za kontakt. Odezwiemy się tak szybko, jak to możliwe.",
        });

        form.reset();
      } else {
        toast("Błąd formularza!", {
          description: "Coś poszło nie tak. Spróbuj ponownie później.",
        });
      }
    } catch {
      toast("Błąd formularza!", {
        description: "Coś poszło nie tak. Spróbuj ponownie później.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div>
        <Label className="mb-8" htmlFor="name">
          Imię
        </Label>
        <Input id="name" name="name" placeholder="Jan Kowalski" required />
      </div>

      <div>
        <Label className="mb-8" htmlFor="email">
          E-mail
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="twoj@email.com"
          required
        />
      </div>

      <div>
        <Label className="mb-8" htmlFor="message">
          Treść wiadomości
        </Label>
        <Textarea
          className="resize-none"
          id="message"
          name="message"
          rows={4}
          placeholder="Wpisz tutaj swoją wiadomość..."
          required
        />
      </div>

      <Button className="w-fit" type="submit" disabled={isLoading}>
        {isLoading && <Spinner className="size-5" />}
        Wyślij wiadomość
      </Button>
    </form>
  );
};
