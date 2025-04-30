
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      form.reset();
      
      // Redirect to Discord
      window.open("https://discord.gg/qpVU7wu9", "_blank");
    }, 1000);
    
    // In a real implementation, you would send this data to your backend
    console.log(values);
  }

  return (
    <div className="w-full max-w-md mx-auto">      
      <h3 className="text-2xl font-display font-semibold mb-6 text-center text-light-text">Join our Discord</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-light-text">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" className="bg-white border-accent/20 text-light-text focus-visible:ring-accent/50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-light-text">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" className="bg-white border-accent/20 text-light-text focus-visible:ring-accent/50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-light-text">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="bg-white border-accent/20 text-light-text min-h-[120px] focus-visible:ring-accent/50" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/80 text-white font-medium transition-all gap-2"
          >
            {isSubmitting ? (
              "Connecting..."
            ) : (
              <>
                Join Discord
                <Send size={16} className="ml-1" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
