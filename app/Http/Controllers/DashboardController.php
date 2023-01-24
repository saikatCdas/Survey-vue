<?php

namespace App\Http\Controllers;

use App\Http\Resources\SurveyAnswerResource;
use App\Http\Resources\SurveyResource;
use App\Http\Resources\SurveyResourceDashboard;
use App\Models\Survey;
use App\Models\SurveyAnswer;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // Total Number of Surveys
        $total = Survey::query()->where('user_id', $user->id)->count();

        // Latest Survey
        $latest = Survey::where('user_id', $user->id)->latest('created_at')->first();

        // Total Number of answers
        $totalAnswer = SurveyAnswer::query()
            ->join('surveys', 'survey_answers.survey_id', '=', 'surveys.id')
            ->where('surveys.user_id', $user->id)
            ->count();

        // Latest 5 answer
        $latestAnswer = SurveyAnswer::query()
            ->join('surveys', 'survey_answers.survey_id', '=', 'surveys.id')
            ->where('surveys.user_id', $user->id)
            ->orderBy('end_date', 'DESC')
            ->limit(5)
            ->getModels('survey_answers.*');


        return [
            'totalSurveys' => $total,
            'latestSurvey' => $latest ? new SurveyResourceDashboard($latest) : null,
            'totalAnswers' => $totalAnswer,
            'latestAnswers' => SurveyAnswerResource::collection($latestAnswer)
        ];

    }
}
