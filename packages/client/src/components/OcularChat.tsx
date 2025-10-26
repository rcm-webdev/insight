import { useForm } from 'react-hook-form';
import type { KeyboardEvent } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

type FormData = {
   prompt: string;
};

const ChatBot = () => {
   const { register, handleSubmit, reset, formState } = useForm<FormData>();
   const onSubmit = (data: FormData) => {
      console.log(data);
      reset();
   };

   const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(onSubmit)();
      }
   };
   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
         <textarea
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            onKeyDown={onKeyDown}
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
            maxLength={1000}
         />
         <Button
            disabled={!formState.isValid}
            className="w-12 h-12 rounded-full"
         >
            <Sparkles className="size-6" />
         </Button>
      </form>
   );
};

export default ChatBot;
