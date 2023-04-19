from django.shortcuts import render

# Create your views here.
from .models import Company, Vacancy
from django.http.response import JsonResponse, HttpResponse

def create_company(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        company = Company.objects.create(name=name, description=description)
        return JsonResponse({'message': f"Company '{name}' created successfully!", 'company_id': company.id}, status=201)
    else:
        return JsonResponse({'message': 'Invalid request method!'}, status=400)

def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancy_set.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


def create_vacancy(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        salary = request.POST.get('salary')
        company_id = request.POST.get('company_id')
        try:
            company = Company.objects.get(id=company_id)
        except Company.DoesNotExist as e:
            return JsonResponse({'message': str(e)}, status=404)
        vacancy = Vacancy.objects.create(name=name, description=description, salary=salary, company=company)
        return JsonResponse({'message': f"Vacancy '{name}' created successfully!", 'vacancy_id': vacancy.id}, status=201)
    else:
        return JsonResponse({'message': 'Invalid request method!'}, status=400)


def vacancies_list(request):
    top = request.GET.get('top', None)
    if top is not None:
        try:
            top = int(top)
            if top <= 0: raise ValueError('\"top\" query parameter must be more than 0')
            vacancies = Vacancy.objects.all().order_by('-salary')[:top]
        except ValueError as e:
            vacancies = Vacancy.objects.all()
    else:
        vacancies = Vacancy.objects.all()

    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def update_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)

    if request.method == 'PUT':
        name = request.PUT.get('name', company.name)
        description = request.PUT.get('description', company.description)
        company.name = name
        company.description = description
