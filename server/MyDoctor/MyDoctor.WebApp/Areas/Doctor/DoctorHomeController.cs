﻿using CartSharp.Domain.Types;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using MyDoctor.Domain.Models;
using MyDoctor.Service.Data;
using MyDoctor.Service.Dto;
using MyDoctor.Service.Services;
using System.Collections.Generic;
using System.Security.Claims;

namespace MyDoctor.WebApp.Areas.Doctor
{
    public class DoctorHomeController : DoctorBaseController
    {
        private readonly DoctorService _doctorService;
        private readonly DoctorProfileService _doctorProfileService;

        public DoctorHomeController(DoctorService doctorService,
                                     DoctorProfileService doctorProfileService)
        {
            _doctorService = doctorService;
            _doctorProfileService = doctorProfileService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(AppointmentDoctorDto),statusCode: StatusCodes.Status200OK)]
        [ProducesResponseType(statusCode: StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetTodayAppointments(int id)
        {
            var res = await _doctorService.GetTodayAppointmentsAsync(id);
            return Ok(res);
        }
        [HttpPut]
        [ProducesResponseType(typeof(DoctorProfileDto[]), statusCode: StatusCodes.Status200OK)]
        public async Task<IActionResult> DoctorProfile(int id, DoctorProfileDto dto)
        {
            var res = await _doctorProfileService.EditDoctorProfileAsync(id, dto);
            return Ok();
        }
    }
}