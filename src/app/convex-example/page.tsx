"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { AuthProvider } from "@/providers/AuthProvider";

export default function Home() {
    const tasks = useQuery(api.sampleConvexExample.tasks.get);
    return (
        <AuthProvider className="flex min-h-screen flex-col items-center justify-between p-24">
            {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </AuthProvider>
    );
}
