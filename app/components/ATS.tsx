import React from 'react';

interface Suggestion {
    type: "good" | "improve";
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    let bgColorClass = "from-red-100";
    let iconSrc = "/icons/ats-bad.svg";

    if (score > 69) {
        bgColorClass = "from-green-100";
        iconSrc = "/icons/ats-good.svg";
    } else if (score > 49) {
        bgColorClass = "from-yellow-100";
        iconSrc = "/icons/ats-warning.svg";
    }

    return (
        <div className={`rounded-2xl p-6 bg-gradient-to-b ${bgColorClass} to-white shadow-sm border border-gray-100`}>
            {/* Top Section */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm">
                    <img src={iconSrc} alt="ATS Icon" className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">ATS Score - {score}/100</h2>
            </div>

            {/* Description Section */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">How it works</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Applicant Tracking Systems (ATS) scan your resume for keywords and formatting. 
                        A higher score means your resume is more likely to pass these filters and reach a human recruiter.
                    </p>
                </div>

                {/* Suggestions List */}
                <div className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <img 
                                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"} 
                                alt={suggestion.type} 
                                className="w-5 h-5 mt-0.5" 
                            />
                            <p className="text-gray-700 text-sm">{suggestion.tip}</p>
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <p className="text-sm font-medium text-gray-600 pt-2">
                    Improve these points to increase your chances of getting noticed!
                </p>
            </div>
        </div>
    );
};

export default ATS;
