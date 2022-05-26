from datetime import datetime
import json
from .exlsx import Exlsx
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import HttpResponse
from tempfile import NamedTemporaryFile


class GenerateXlsx(APIView):
    """
    Generate XLSX Balans file
    """

    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):

        operations = json.loads(request.data["operations"])
        start_data = json.loads(request.data["start_data"])
        template_file = request.data["template_file"]

        exapp = Exlsx(
            operations=operations, start_data=start_data, template_file=template_file
        )
        wb = exapp.main()
        with NamedTemporaryFile() as tmp:
            wb.save(tmp.name)
            tmp.seek(0)
            stream = tmp.read()

        response = HttpResponse(
            content=stream,
            content_type="application/ms-excel",
        )
        response[
            "Content-Disposition"
        ] = f'attachment; filename=ExportedExcel-{datetime.now().strftime("%Y%m%d%H%M")}.xlsx'
        return response
