import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return ( 
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />

        <div className="mb-8 space-y-4 px-4 md:px-20 lg:px-32">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            <Alert variant="destructive" className="mx-4 mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                The services are not working currently as we don&apos;t have active API integrations.
              </AlertDescription>
            </Alert>
          </h2>
        </div>

        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;
