<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class LongDogeController extends AbstractController
{
    #[Route('/long-doge', name: 'app_long_doge')]
    public function index(): Response
    {
        return $this->render('long_doge/index.html.twig', [
            'controller_name' => 'LongDogeController',
        ]);
    }
}
