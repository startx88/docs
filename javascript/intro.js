/**
 * Declarative Javascript:
 *
 */
  services.AddRazorPages();
            services.AddServerSideBlazor();
            services.AddBlazoredLocalStorage();
            services.AddSingleton<WeatherForecastService>();

            var appSettings = Configuration.GetSection("AppSettings");
            

            services.AddScoped<AuthenticationStateProvider, CustomAuthenticationStateProvider>();
            services.AddHttpClient<IAuthService, AuthService>(x =>
            {
                x.BaseAddress = new Uri("http://localhost:4200/api/");
                x.DefaultRequestHeaders.Add("User-Agent", "BlazorServer");
            });
            services.AddSingleton<HttpClient>();
			
			hanish.sachdeva@rsystems.com