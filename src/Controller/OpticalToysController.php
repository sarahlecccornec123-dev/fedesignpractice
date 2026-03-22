<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\OpticalToysService;

final class OpticalToysController extends AbstractController
{

    private $opticalToysService;

    public function __construct(OpticalToysService $opticalToysService)
    {
        $this->opticalToysService = $opticalToysService;
    }

    #[Route('/optical-toys', name: 'app_optical_toys')]
    public function index(): Response
    {
        // var_dump($this->opticalToysService->getOpticalToys());
        return $this->render('optical_toys/index.html.twig', [
           'opticalToys' => $this->opticalToysService->getOpticalToys()
        ]);
    }
}
