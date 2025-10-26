import ChatBot from './components/OcularChat';
import { OcularImage } from './components/OcularImage';

function App() {
   return (
      <div className="min-h-screen bg-background py-8">
         <div className="mx-auto max-w-5xl px-4 space-y-6">
            {/* Main Content Frame */}
            <OcularImage title="Insight Lens">
               <div className="space-y-4">
                  <img
                     src="./images/Patient013_R.jpg"
                     alt="moderate diabetic retinopathy with maculopathy"
                     className="w-full max-w-md mx-auto rounded-lg border border-border shadow-lg"
                  />
                  <p className="text-muted-foreground text-center font-mono text-sm">
                     {/* make this dynamic with list of diagnosis based on confidence level */}
                     Moderate diabetic retinopathy with maculopathy
                     <br />
                     {/* import source from form that will provided */}
                     diabetic retinopathy grade: 5 <br />
                     <a
                        href="https://github.com/SRahimDR/DR-image-dataset/tree/main"
                        className="text-sky-500"
                        target="_blank"
                     >
                        source
                     </a>
                  </p>
               </div>
            </OcularImage>

            {/* Chat Section */}
            <OcularImage>
               <ChatBot />
            </OcularImage>
         </div>
      </div>
   );
}

export default App;
