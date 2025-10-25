import { OcularImage } from './components/OcularImage';

function App() {
   return (
      <div className="min-h-screen bg-background py-8">
         <div className="mx-auto max-w-5xl px-4 space-y-6">
            {/* Main Content Frame */}
            <OcularImage title="Ocular Image">
               <div className="space-y-4">
                  <img
                     src="./images/diabetic_retinopathy.jpg"
                     alt="textbook diabetic retinopathy"
                     className="w-full max-w-md mx-auto rounded-lg border border-border shadow-lg"
                  />
                  <p className="text-muted-foreground text-center font-mono text-sm">
                     Diabetic Retinopathy
                     <br />
                     source: Univeristy of Iowa <br />
                     <strong>Patient A</strong>
                  </p>
               </div>
            </OcularImage>

            {/* Chat Section */}
         </div>
      </div>
   );
}

export default App;
