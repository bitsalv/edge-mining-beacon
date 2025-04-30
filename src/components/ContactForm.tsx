
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { MessageSquare } from 'lucide-react';

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
    }, 1000);
    
    // In a real implementation, you would send this data to your backend
    console.log(values);
  }

  return (
    <div className="w-full max-w-md mx-auto glass-effect p-6 rounded-lg border border-gray-800/50">
      <div className="flex items-center justify-center mb-6">
        <div className="h-12 w-12 flex items-center justify-center bg-accent rounded-full">
          <MessageSquare size={24} className="text-dark" />
        </div>
      </div>
      
      <h3 className="text-xl font-display font-semibold mb-4 text-center text-white">Join our Discord</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-light-text">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" className="bg-dark-accent/50 border-gray-700 text-light-text" {...field} />
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
                  <Input placeholder="Your email" className="bg-dark-accent/50 border-gray-700 text-light-text" {...field} />
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
                    className="bg-dark-accent/50 border-gray-700 text-light-text min-h-[120px]" 
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
            className="w-full bg-accent hover:bg-accent/80 text-dark font-medium"
          >
            {isSubmitting ? "Sending..." : "Join Discord"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
