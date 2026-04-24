import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";

import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";

async function Home() {
    const user = await getCurrentUser();

    const [userInterviews, allInterview] = await Promise.all([
        getInterviewsByUserId(user?.id!),
        getLatestInterviews({ userId: user?.id! }),
    ]);

    const hasPastInterviews = userInterviews?.length! > 0;
    const hasUpcomingInterviews = allInterview?.length! > 0;

    return(
        <>
        <section className="card-cta">
            <div className= "flex flex-col gap-6 max-w-lg">
                <h2>
                    Get Started with AI-Powered Mock Interviews: Your Ultimate Practice Partner for Acing Tech Interviews!
                </h2>
                <p className= "text-lg">
                    Prepare for your tech interviews with our AI-powered mock interview platform. Practice coding, system design, and behavioral questions with a virtual interviewer 

                </p>

                <Button asChild className= "btn-primary max-sm:w-full">
                    <Link href="/interview">Start Interview</Link>
                </Button>

            </div>

            <Image
                 src="/robot.png"
                 alt="robot-image"
                 width={400}
                 height={400}
                 className="max-sm:hidden"
             />
        </section>


        <section className="flex flex-col gap-6 mt-8">
            <h2>Latest Interviews</h2>

            <div className="interview-section">
                {hasPastInterviews ? (
                    userInterviews?.map((interview) => (
                        <InterviewCard
                            key={interview.id}
                            interviewId={interview.id}
                            userId={user?.id}
                            role={interview.role}
                            type={interview.type}
                            techstack={interview.techstack}
                            createdAt={interview.createdAt}
                        />

                    )) 
                ): (
                    <p>No past interviews found. Start your first interview now!</p>
                )}
            </div> 
        </section> 

        <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>


        
        
        </>
    )
}