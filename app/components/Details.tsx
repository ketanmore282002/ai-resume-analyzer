import React from "react";
import { cn } from "~/lib/utils";
// import type { Feedback } from '~/../types';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionContent,
} from "./Accordion";

interface Tip {
    type: "good" | "improve";
    tip: string;
    explanation: string;
}

const ScoreBadge = ({ score }: { score: number }) => {
    const isGreen = score > 69;
    const isYellow = score > 39;

    return (
        <div
            className={cn(
                "flex items-center px-3 py-1 rounded-full text-sm font-medium",
                isGreen
                    ? "bg-green-100 text-green-700"
                    : isYellow
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
            )}
        >
            {isGreen && (
                <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>
            )}
            <span>{score}/100</span>
        </div>
    );
};

const CategoryContent = ({ tips }: { tips: Tip[] }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                    >
                        <div className="mt-0.5">
                            {tip.type === "good" ? (
                                <svg
                                    className="w-5 h-5 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5 text-yellow-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            {tip.tip}
                        </span>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className={cn(
                            "p-4 rounded-lg border-l-4",
                            tip.type === "good"
                                ? "bg-green-50 border-green-500"
                                : "bg-yellow-50 border-yellow-500"
                        )}
                    >
                        <h4
                            className={cn(
                                "text-sm font-bold mb-1",
                                tip.type === "good"
                                    ? "text-green-800"
                                    : "text-yellow-800"
                            )}
                        >
                            {tip.type === "good" ? "What's working" : "How to improve"}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {tip.explanation}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
    const sections = [
        { id: "tone", title: "Tone & Style", data: feedback.toneAndStyle },
        { id: "content", title: "Content", data: feedback.content },
        { id: "structure", title: "Structure", data: feedback.structure },
        { id: "skills", title: "Skills", data: feedback.skills },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h2 className="text-2xl w-full font-bold mb-6 text-gray-800">Detailed Feedback</h2>
            <Accordion allowMultiple>
                {sections.map((section) => (
                    <AccordionItem key={section.id} id={section.id} className="border border-gray-200 rounded-lg mb-4 bg-white shadow-sm">
                        <AccordionHeader itemId={section.id} className="hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between w-full pr-4">
                                <span className="text-lg font-semibold text-gray-700">
                                    {section.title}
                                </span>
                                <ScoreBadge score={section.data.score} />
                            </div>
                        </AccordionHeader>
                        <AccordionContent itemId={section.id}>
                            <CategoryContent tips={section.data.tips} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Details;
