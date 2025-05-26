"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/lib/questions";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";

type Answer = {
	questionId: number;
	type: "phlegmatic" | "sanguine" | "melancholic" | "choleric";
};

export default function QuizPage() {
	const router = useRouter();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<Answer[]>([]);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const currentQuestion = questions[currentQuestionIndex];
	const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

	const handleOptionSelect = (type: "phlegmatic" | "sanguine" | "melancholic" | "choleric") => {
		setSelectedOption(type);
	};

	const handleNext = () => {
		if (selectedOption) {
			// Save the answer
			const newAnswer: Answer = {
				questionId: currentQuestion.id,
				type: selectedOption as "phlegmatic" | "sanguine" | "melancholic" | "choleric",
			};

			const updatedAnswers = [...answers];
			const existingAnswerIndex = updatedAnswers.findIndex((a) => a.questionId === currentQuestion.id);

			if (existingAnswerIndex >= 0) {
				updatedAnswers[existingAnswerIndex] = newAnswer;
			} else {
				updatedAnswers.push(newAnswer);
			}

			setAnswers(updatedAnswers);

			// Move to next question or finish
			if (currentQuestionIndex < questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
				setSelectedOption(null);
			} else {
				// Calculate results and navigate to results page
				const results = calculateResults(updatedAnswers);
				const resultsParam = encodeURIComponent(JSON.stringify(results));
				router.push(`/results?data=${resultsParam}`);
			}
		}
	};

	const handlePrevious = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);

			// Pre-select the previous answer if it exists
			const previousAnswer = answers.find((a) => a.questionId === questions[currentQuestionIndex - 1].id);
			setSelectedOption(previousAnswer ? previousAnswer.type : null);
		}
	};

	const calculateResults = (allAnswers: Answer[]) => {
		const counts = {
			phlegmatic: 0,
			sanguine: 0,
			melancholic: 0,
			choleric: 0,
		};

		allAnswers.forEach((answer) => {
			counts[answer.type]++;
		});

		const total = allAnswers.length;

		return {
			phlegmatic: (counts.phlegmatic / total) * 100,
			sanguine: (counts.sanguine / total) * 100,
			melancholic: (counts.melancholic / total) * 100,
			choleric: (counts.choleric / total) * 100,
		};
	};

	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<header className="border-b border-border">
				<div className="container mx-auto px-4 py-6 flex justify-between items-center">
					<Link href={"/"} className="flex justify-center items-center">
						<Image src={"/galen-logo.png"} alt="Galen Logo" width={60} height={60} className="inline-block mr-2" />
						<h1 className="text-2xl font-semibold">Kenali Galen</h1>
					</Link>
					<div className="flex items-center space-x-4">
						<div className="text-sm text-muted-foreground">
							Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
						</div>
						<ThemeToggle />
					</div>
				</div>
			</header>

			<main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
				<div className="mb-8">
					<Progress value={progress} className="h-2" />
				</div>

				<Card className="mb-8 bg-card border-border">
					<CardContent className="pt-6">
						<h2 className="text-xl font-semibold mb-6">{currentQuestion.text}</h2>

						<div className="space-y-3">
							{currentQuestion.options.map((option, index) => (
								<div key={index} className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedOption === option.type ? "border-primary bg-muted" : "border-border hover:border-muted-foreground hover:bg-muted/50"}`} onClick={() => handleOptionSelect(option.type)}>
									{option.text}
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				<div className="flex justify-between">
					<Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="flex items-center">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Sebelumnya
					</Button>

					<Button onClick={handleNext} disabled={!selectedOption} className="flex items-center">
						{currentQuestionIndex < questions.length - 1 ? "Selanjutnya" : "Lihat Hasil"}
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</main>
		</div>
	);
}
