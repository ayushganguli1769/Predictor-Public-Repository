from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404
from .models import College,cse, IT
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
# Create your views here.
def home(request):#This page will show logout if logged in or login and register if not logged in
    return render( request, 'college_predictor/homeView.html')
def registerView(request):
    if request.method == "POST":#har jaga bracket () laga be
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/college_predictor/login/')
    else:   #This block starts getting executed incase of method not being POST. Hence idented accordingly
        form= UserCreationForm()
    return render(request,'registration/register.html', {'form':form})


#User shouldn't be able to acess any view function after this
#---------------------------------------------------------
@login_required
def index(request): 
    return render(request,'college_predictor/index.html')
def input(request):
    global preference1
    global preference2
    global preference3
    global preference4
    global pref_list
    #All rank inputs
    global op_rank
    global ad_op_rank
    global is_obc
    global obc_rank
    global ad_obc_rank
    global is_sc
    global sc_rank
    global ad_sc_rank
    global is_st
    global st_rank
    global ad_st_rank
    global is_ews
    global ews_rank
    global ad_ews_rank
    global is_f
    global hs
    #end of all rank input
    if 'inputting' in request.POST:
        is_obc = False
        is_sc = False
        is_st = False
        is_ews= False
        is_f= False
        if 'is_obc' in request.POST :
            is_obc = bool(request.POST['is_obc'])
        if 'is_sc' in request.POST :
            is_sc = bool(request.POST['is_sc'])
        if 'is_st' in request.POST :
            is_st = bool(request.POST['is_st'])
        if 'is_ews' in request.POST :
            is_ews = bool(request.POST['is_ews'])
        if 'is_f' in request.POST :
            is_f = bool(request.POST['is_f'])
        
        preference1= str(request.POST['branch1'])
        preference2= str(request.POST['branch2'])
        preference3= str(request.POST['branch3'])
        preference4= str(request.POST['branch4'])
        preference5= str(request.POST['branch5'])
        preference6= str(request.POST['branch6'])
        preference7= str(request.POST['branch7'])
        preference8= str(request.POST['branch8'])
        preference9= str(request.POST['branch9'])
        preference10= str(request.POST['branch10'])

        hs = str(request.POST['home'])
        #--------------
        op_rank= int(request.POST['op_rank'])
        ad_op_rank= int(request.POST['ad_op_rank'])
        obc_rank= int(request.POST['obc_rank'])
        ad_obc_rank= int(request.POST['ad_obc_rank'])
        sc_rank= int(request.POST['sc_rank'])
        ad_sc_rank= int(request.POST['ad_sc_rank'])
        st_rank= int(request.POST['st_rank'])
        ad_st_rank= int(request.POST['ad_st_rank'])
        ews_rank= int(request.POST['ews_rank'])
        ad_ews_rank= int(request.POST['ad_ews_rank'])

        #---------------
        pref_list= []
        pref_list.append(preference1)
        pref_list.append(preference2)
        pref_list.append(preference3)
        pref_list.append(preference4)
        pref_list.append(preference5)
        pref_list.append(preference6)
        pref_list.append(preference7)
        pref_list.append(preference8)
        pref_list.append(preference9)
        pref_list.append(preference10)

        return render(request,'college_predictor/index.html',{'preference1':preference1,'preference2':preference2,'preference3':preference3,'preference4':preference4,'preference5':preference5,'pref_list':pref_list,'is_sc':is_sc})
    if 'result' in request.POST:
        all_college = College.objects.all().order_by('nirf_rank')# correct one
        return render(request,'college_predictor/result.html',{'all_college':all_college,'pref_list':pref_list,'is_obc':is_obc,'is_sc':is_sc,'is_st':is_st,'is_ews':is_ews,'is_f':is_f,'op_rank':op_rank,'ad_op_rank':ad_op_rank,'obc_rank':obc_rank,'ad_obc_rank':ad_obc_rank,'sc_rank':sc_rank,'ad_sc_rank':ad_sc_rank,'st_rank':st_rank,'ad_st_rank':ad_st_rank,'ews_rank':ews_rank,'ad_ews_rank':ad_ews_rank,'hs':hs})
@login_required
def detail(request,college_id):
    try: 
        college = College.objects.get(id= college_id )
    except College.DoesNotExist:
        raise Http404("College does not exist!!!!")
    return render(request,'college_predictor/detail.html', {'college':college})



"""lessons leanrt: to parse variable into template it should be declared 
or that function should have been called before. That's why use if statement
in templates while passing variables
GET vs POST: Get is used to fetch data. Data isn't secured. Used to fetch data which doesn't change models
POST:Used to send data to server. Secured method. Can be used in user authentication form
aise sab chalta hai cuz here it seems we should use post. When using post mention the method post in form and use csrf_token
"""